import express from 'express'
import cors from 'cors'
import { routes } from './routes';

//? A biblioteca express ajuda quando vamos mexer com portas que os usuários vão acessar
const app = express();

// Irá realizar um controle de segurança do nosso back-end, ou seja, ele irá dizer quais endereços de front-end poderão acessar nosso back-end
app.use(cors());
// Irá verificar se existe algum corpo da request em formato JSON
app.use(express.json());
app.use(routes);





app.listen(3333, () => {
    console.log('HTTP server running!');
});

