import MyForm, { MyFormProps } from '@/components/core/form';
import MyButton from '@/components/basic/button';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

interface SearchProps<T> extends MyFormProps<T> {
  onSearch: (values: T) => void;
}

const BaseSearch = <T extends object>(props: SearchProps<T>) => {
  const { children, onSearch, ...rest } = props;
  const [form] = MyForm.useForm<T>();
  const [antimkiem, setAntimkiem] = useState(false);

  const onSubmit = async () => {
    const values = await form.validateFields();

    if (values) {
      onSearch(values);
    }
  };

  return (
    <div css={styles}>
      <MyForm {...rest} form={form} layout="inline" anTimKiem={antimkiem}>
        {children}
        <div className="form-search">
          <MyForm.Item>
            <MyButton type="primary" onClick={onSubmit}>
              Tìm kiếm
            </MyButton>
            <MyButton onClick={() => form.resetFields()}>Xoá bộ lọc</MyButton>
            <MyButton onClick={() => setAntimkiem(!antimkiem)}>
              {antimkiem ? 'Hiện thêm' : 'Ẩn bớt'} trường tìm kiếm
            </MyButton>
          </MyForm.Item>
        </div>
      </MyForm>
    </div>
  );
};

const MySearch = Object.assign(BaseSearch, {
  Item: MyForm.Item,
});

export default MySearch;

const styles = css`
  padding: 20px;
  .ant-form-item {
    margin-bottom: 20px;
  }
`;
