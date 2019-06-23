import {notification} from "antd"

const openNotificationWithIcon = () => {
    notification["success"]({
        message: 'Operación completada',
        description:
            'Se ha realizado la operación correctamente',
    });
};

export default openNotificationWithIcon;