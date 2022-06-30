import { Table, Typography, Image } from 'antd';
import { users } from '../data';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      filters: [
        {text: 'Sincere@april.biz', value: 'Sincere@april.biz'},
        {text: 'Shanna@melissa.tv', value: 'Shanna@melissa.tv'}
      ],
      onFilter: (value, item)=>item.email.includes(value) 
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate',
      sorter: (a,b)=> a.rate - b.rate
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: image => <Image src={image} width={50} />
    }
]

const dataSource = users.map(item=> ({...item, key: item.id}));

const _Table = ({rows})=>{
    return (
        <Table 
            dataSource={dataSource}
            columns={columns}
            pagination={
              //{pageSize: '5', showSizeChanger: true, pageSizeOptions: [5,10, 15, 20]}
              {pageSize: rows}
            }
        />
    );
}

export default _Table;