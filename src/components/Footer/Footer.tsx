import { AimOutlined, AndroidFilled, AppleFilled, UserOutlined } from '@ant-design/icons';
import { Card, Col, Divider, Layout, Row, Space, Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import './footer.css'

const { Footer } = Layout;

export const MyFooter = () => {
    const { Title, Text } = Typography;
    return (
        <Footer style={{ bottom: '40px', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <a href='#'>Смотреть отзывы </a>
                </div>
                <Card className='footer-card__phones'>
                    <Typography.Link href="#">
                        Скачать на телефон
                    </Typography.Link>
                    <Typography.Text style={{ display: "block" }}>
                        Доступно в PRO-тарифе
                    </Typography.Text>
                    <Divider />
                    <Row style={{ display: "flex", justifyContent: "space-between" }} >
                        <Col span={12}>
                            <Space>
                                <AndroidFilled />
                                <Text>Android OS</Text>
                            </Space>
                        </Col>
                        <Col span={12}>
                            <Space>
                                <AppleFilled />
                                <Text>Apple iOS</Text>
                            </Space>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Footer >
    );
};

export default MyFooter;
