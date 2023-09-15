# jquery-bs-confirm
A small JQuery plugin that creates a confirmation dialog using the bootstrap modal.

![](/demo/img/dialog.png)  

## options

| property       | type         | description                                                                                                      | default                                        |
|----------------|--------------|------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| dialog         | string       | Additional classes that can be added to the modal-dialog element                                                 | `''`                                           |
| showHeader     | bool         | Here you can specify whether the modal-header element should be displayed or not.                                | `true`                                         |
| title          | string\|html | If the header is to be displayed, the header text can be specified here.                                         | `'Please confirm this action'`                 |
| message        | string\|html | This is where the modal body text is defined.                                                                    | `'Are they sure they want to do this action?'` |
| animationClass | string       | Here the animation can be defined by the appear. For example, you can add classes from animate.css.              | `'fade'`                                       |
| confirmText    | string       | The text of the confirmation button                                                                              | `'confirm'`                                    |
| cancelText     | string       | The text of the cancel button                                                                                    | `'cancel'`                                     |
| onConfirm      | function     | The function is triggered upon confirmation.                                                                     | `() => {}`                                     |
| onCancel       | function     | The function is triggered when you cancel.                                                                       | `() => {}`                                     |
| onComplete     | function     | The function is triggered in both cases and returns the parameter isConfirmed to know if confirmed or cancelled. | `({bool} isConfirmed) => {}`                   |
