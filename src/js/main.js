import React, {createElement} from 'react';

const EXAMPLE = {
    "form": {

    "name": "Название формы",

        "items": [{

        "type": "filler",

        "attributes": {

            "message": "Произвольные текста"

        }

    }, {

        "type": "text",

        "attributes": {

            "name": "Имя элемента",

            "placeholder": "Текст для placeholder",

            "required": true,

            "value": "",

            "label": "Описание text",

            "class": "css-class",

            "validationRules": [{

                "type": "text"

            }],

            "disabled": false

        }

    }, {

        "type": "textarea",

        "attributes": {

            "name": "Имя элемента",

            "placeholder": "Текст для placeholder",

            "required": true,

            "value": "",

            "label": "Описание textarea",

            "validationRules": [{

                "type": "text"

            }],

            "class": "css-class",

            "disabled": false

        }
    }, {

        "type": "checkbox",

        "attributes": {

            "name": "Имя элемента",

            "required": true,

            "label": "Описание checkbox",

            "class": "css-class",

            "checked": false,

            "disabled": false

        }

    }, {
        "type": "button",

        "attributes": {

            "class": "css-class",

            "value": "Кнопка"

        }
    }, {
        "type": "select",

        "attributes": {

            "name": "Имя элемента",

            "placeholder": "Текст для placeholder",

            "required": true,

            "value": "",

            "label": "Описание select",

            "class": "css-class",

            "options": [{

                "value": "",

                "text": "Текст",

                "selected": true

            }, {

                "value": "",

                "text": "Текст2",

                "selected": true

            }],

            "disabled": false

        }
    }, {
        "type": "radio",

        "attributes": {

            "name": "Имя элемента",

            "placeholder": "Текст для placeholder",

            "required": true,

            "value": "",

            "label": "Описание radio",

            "class": "css-class",

            "items": [{

                "value": "",

                "label": "Текст",

                "checked": false

            }],

            "disabled": false
        },

    }],

        "postmessage": "Сообщение в случае успешного заполнения формы"
    }
};

const RRR = [];
const ABC = [];
const ABB = [];

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.bb = [];
        this.cc = 0;
    }

    aa() {
        this.bb.push(EXAMPLE);
        this.cc = this.bb.map(function(index) {
            return index.form.items.forEach(function (dd) {
                if (dd.attributes.options !== undefined) {
                    ABC.push(dd.attributes.options)
                }
                if (dd.attributes.validationRules !== undefined) {
                    ABC.push(dd.attributes.validationRules)
                }
                if (dd.attributes.items !== undefined) {
                    ABC.push(dd.attributes.items)
                }
                RRR.push(dd);
            })
        });
        //console.log(ABB);
    }

    render() {
        return(
            <div>
                { this.aa() }
                <form>{
                    RRR.map(function(i) {
                        if (i.type === 'filler' || i.type === 'text' || i.type === 'button' || i.type === 'checkbox' || i.type === 'radio') {
                            return [<br></br>,
                                createElement('label', {}, i.attributes.label),
                                <br></br>,
                                createElement('input',
                                {type: i.type,
                                    message: i.attributes.message,
                                    name: i.attributes.name,
                                    placeholder: i.attributes.placeholder,
                                    required: i.attributes.required,
                                    value: i.attributes.value,
                                    class: i.attributes.class,
                                    validationRules: '',
                                    disabled: i.attributes.disabled,
                                },
                                null)]
                    }
                    else {
                            return [<br></br>,
                                createElement('label', {}, i.attributes.label),
                                <br></br>,
                                createElement(i.type,
                                    {type: i.type,
                                        message: i.attributes.message,
                                        name: i.attributes.name,
                                        placeholder: i.attributes.placeholder,
                                        required: i.attributes.required,
                                        value: i.attributes.value,
                                        class: i.attributes.class,
                                        options: ABC.map((kk) => kk.forEach((hh) => hh.text)),
                                        disabled: i.attributes.disabled,
                                    },
                                    null)]
                        }
                    })
                } </form>
            </div>
        )
    }
}