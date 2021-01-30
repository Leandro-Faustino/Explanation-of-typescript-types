import  express from 'express';
import { meuUser} from './routes';

const app = express();

app.get('/', meuUser );

app.listen(3333,() => {
    console.log(' 🙌 Servidor rodando com sucesso!')
});