import { Form } from 'antd';
import { FormProps } from 'antd/es/form/Form';
import MyFormItem, { ControlTypes, MyFormItemProps } from '../form-item';

export interface MyFormOptions extends Array<MyFormItemProps<ControlTypes>> {}

export interface MyFormProps<T> extends FormProps<T> {
  options?: MyFormOptions;
  anTimKiem?: boolean;
}

const BaseForm = <Values extends object>(props: MyFormProps<Values>) => {
  const { options, children, anTimKiem, ...rest } = props;

  return (
    <Form<Values> {...rest} className={`form-an-tim-kim-${anTimKiem}`}>
      {options?.map(option => {
        return <MyFormItem {...option} />;
      })}
      {children}
    </Form>
  );
};

const MyForm = Object.assign(BaseForm, Form, { Item: MyFormItem });

export default MyForm;
