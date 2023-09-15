(function($){
$.confirm = function (options) {
    const settings = $.extend(true, {
        dialog: '',
        title: 'Please confirm this action',
        message: 'Are they sure they want to do this action?',
        showHeader: true,
        animationClass:'fade',
        confirmText: 'confirm',
        cancelText: 'cancel',
        onConfirm() {

        },
        onCancel() {

        },
        onComplete(isConfirmed) {

        }
    }, options || {});
    const modalId = '3f31c593-6f58-4179-ae66-b1c649efde5f';

    let modal = null;

    function build() {
        let header = '';
        if (settings.showHeader) {
            header = `<div class="modal-header p-2">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${settings.title}</h1>
                        <button type="button" class="btn-close  js-cancel" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>`;
        }

        const theme = $('html').attr('data-bs-theme');
        let textClass = '';
        if (theme === 'dark'){
            textClass = 'text-bg-light';
        }
        const modalDialog = `
              <div class="modal-dialog ${settings.dialog} modal-dialog-centered">
                <div class="modal-content ${textClass}">
                  ${header}
                  <div class="modal-body p-2">
                    ${settings.message}
                  </div>
                  <div class="modal-footer p-2 border-top-0">
                    <button type="button" class="btn btn-sm btn-secondary js-cancel" data-bs-dismiss="modal">${settings.cancelText}</button>
                    <button type="button" class="btn btn-sm btn-primary js-confirm">${settings.confirmText}</button>
                  </div>
                </div>
              </div>
            </div>
        `;

        modal = $('<div>', {
            'data-bs-theme': theme,
            class: `modal ${settings.animationClass} fade animate__animated animate__zoomIn animate__faster`,
            id: modalId,
            'data-bs-backdrop': 'static',
            'aria-hidden': true,
            html: modalDialog
        }).modal('show')

    }

    function init() {
        build();
        events();
    }

    function events() {
        modal
            .on('click', '.js-confirm', function (e) {
                e.preventDefault();
                settings.onConfirm();
                settings.onComplete(true);
                modal.modal('hide');
            })
            .on('click', '.js-cancel', function (e) {
                e.preventDefault();
                settings.onCancel();
                settings.onComplete(false);
                modal.modal('hide');
            })
            .on('hidden.bs.modal', '#' + modalId, function () {
                $(this).remove();
            })
    }
    init();
}
}(jQuery));