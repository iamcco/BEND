import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { updateSearchParam } from '../../actions'

const FormItem = Form.Item;

class Search extends Component {
    handlerSubmit(e) {
        e.preventDefault();
        this.props.dispatch(updateSearchParam(this.props.form.getFieldsValue()))
    }
    render() {
        const { getFieldProps } = this.props.form;
        const { dispatch, searchParam } = this.props;
        return (
            <Form inline onSubmit={this.handlerSubmit.bind(this)}>
                <FormItem
                    label="账户"
                >
                    <Input placeholder="请输入账户名"
                        {...getFieldProps('userName', {initialValue: searchParam.userName})}
                    />
                </FormItem>
                <FormItem
                    label="ID"
                >
                    <Input type="password" placeholder="请输入密码"
                        {...getFieldProps('ID')}
                    />
                </FormItem>
                <Button type="primary" htmlType="submit">查询</Button>
            </Form>
        );
    }
}

export default Form.create()(Search);

