<template>
    <form :class="classes" :autocomplete="autocomplete"><slot></slot></form>
</template>
<script>
    // https://github.com/ElemeFE/element/blob/dev/packages/form/src/form.vue
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-form';

    export default {
        name: 'iForm',
        props: {
            model: {
                type: Object
            },
            rules: {
                type: Object
            },
            labelWidth: {
                type: Number
            },
            labelPosition: {
                validator (value) {
                    return oneOf(value, ['left', 'right', 'top']);
                },
                default: 'right'
            },
            inline: {
                type: Boolean,
                default: false
            },
            showMessage: {
                type: Boolean,
                default: true
            },
            autocomplete: {
                validator (value) {
                    return oneOf(value, ['on', 'off']);
                },
                default: 'off'
            }
        },
        data () {
            return {
                fields: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-label-${this.labelPosition}`,
                    {
                        [`${prefixCls}-inline`]: this.inline
                    }
                ];
            }
        },
        methods: {
            resetFields() {
                this.fields.forEach(field => {
                    field.resetField();
                });
            },
            validate(callback) {
                return new Promise(resolve => {
                    let valid = true;
                    let count = 0;
                    this.fields.forEach(field => {
                        field.validate('', errors => {
                            if (errors) {
                                valid = false;
                            }
                            if (++count === this.fields.length) {
                                // all finish
                                resolve(valid);
                                if (typeof callback === 'function') {
                                    callback(valid);
                                }
                            }
                        });
                    });
                });
            },
            validateField(prop, cb) {
                const field = this.fields.filter(field => field.prop === prop)[0];
                if (!field) { throw new Error('[iView warn]: must call validateField with valid prop string!'); }

                field.validate('', cb);
            },
            onFormItemAdd (field) {
                if (field) this.fields.push(field);
                return false;
            },
            onFormItemRemove (field){
                if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
                return false;
            }
        },
        watch: {
            rules() {
                this.validate();
            }
        },
        created () {
            this.$on('on-form-item-add', this.onFormItemAdd);
            this.$on('on-form-item-remove', this.onFormItemRemove);
        },
        beforeDestroy () {
            this.$off('on-form-item-add', this.onFormItemAdd);
            this.$off('on-form-item-remove', this.onFormItemRemove);
        }
    };
</script>
