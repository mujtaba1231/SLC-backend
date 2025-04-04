import express from 'express';
import { createCommunity, deleteCommunity, getCommunities, getCommunity, updateCommunity } from '../controllers/communityController.js';


const communityRouter = express.Router();

//community routes
communityRouter.post('/', createCommunity);
communityRouter.get('/:id', getCommunity);
communityRouter.get('/', getCommunities);
communityRouter.patch('/:id', updateCommunity);
communityRouter.delete('/:id', deleteCommunity);

export default communityRouter;