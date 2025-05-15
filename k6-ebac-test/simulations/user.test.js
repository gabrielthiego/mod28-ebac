import { group } from 'k6';
import Login from '../request/login.request.js';

const data = {
  usuarioOK: {
    user: "admin",
    pass: "admin"
  }
};

export default function () {  
    let loginInstance = new Login();

    group('login and get token', () => {
        loginInstance.access(data.usuarioOK.user, data.usuarioOK.pass);
    });

    group('list users', () => {
        // Teste listar usuários aqui
    });
}
