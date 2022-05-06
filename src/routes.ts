import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()



// GET utilizado para Buscar informações no banco de dados 
// POST é utilizado quando vamos cadastrar informações no banco de dados
// PUT quando vamos Atualizar informações de uma entidade do banco de dados
// PATCH quando vamos atualizar uma informação única de uma entidade do banco de dados
// DELETE quando vamos deletar uma informação
// O await irá fazer com que a resposta só seja enviada para o cliente depois que a criação lá no banco de dados termine
// O status 201 é um status http que representa que algo foi criado
routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body;
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    });

    
    return res.status(201).send();
});