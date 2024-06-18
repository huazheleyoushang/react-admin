import { Avatar, Modal, Dropdown, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setToken } from '@/store/modules/global/action';
import avatar from '@/assets/images/avatar.png';

const AvatarIcon = (props: any) => {
  const { setToken } = props;
  const navigate = useNavigate();

  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: '温馨提示 🧡',
      icon: <ExclamationCircleOutlined />,
      content: '是否确认退出登录？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        setToken('');
        message.success('退出登录成功！');
        navigate('/login');
      },
    });
  };

  const items = [
    {
      key: 'outline',
      label: <span className="dropdown-item">退出登录</span>,
      onClick: logout,
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} placement="bottom" arrow trigger={['click']}>
        <Avatar size="large" src={avatar} />
      </Dropdown>
    </>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(AvatarIcon);
