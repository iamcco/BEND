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
                    label="任务名称"
                >
                    <Input placeholder="请输入任务名称"
                        {...getFieldProps('dutyName', {initialValue: searchParam.dutyName})}
                    />
                </FormItem>
                <FormItem
                    label="任务ID"
                >
                    <Input placeholder="请输入ID"
                        {...getFieldProps('ID', {initialValue: searchParam.ID})}
                    />
                </FormItem>
                <Button type="primary" htmlType="submit">查询</Button>
            </Form>
        );
    }
}

export default Form.create()(Search);

