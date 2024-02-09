import { AimOutlined } from '@ant-design/icons';
import { Card, Col, Divider, Layout, Row, Space, Typography } from 'antd';
import Title from 'antd/lib/typography/Title';

const { Footer } = Layout;

export const MyFooter = () => {
    const { Title, Text } = Typography;
    return (
        <Footer style={{ bottom: '40px', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <a href='#'>Ссылка 1</a>
                </div>
                <Card>
                    <Title level={4}>Заголовок</Title>
                    <a href='#'>Ссылка</a>
                    <Text>Текст под заголовком и ссылкой</Text>
                    <Divider />
                    <Row>
                        <Col span={12}>
                            <Text>Текст слева</Text>
                        </Col>
                        <Col span={12}>
                            <Text style={{ textAlign: 'right' }}>Текст справа</Text>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Footer>
    );
};

export default MyFooter;
