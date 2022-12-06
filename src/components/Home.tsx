import { Layout } from 'antd'
import React from 'react'
import { Input, Space } from 'antd';

// search
const { Search } = Input;

const { Header, Footer, Sider, Content } = Layout;
// search
const onSearch = (value: string) => console.log(value);
const Home = () => {
  return (
    <>
      <Layout>
        <Header>
          <div className='logo'>
            <a>
              <img></img>
            </a>
          </div>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
      
        </Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}

export default Home