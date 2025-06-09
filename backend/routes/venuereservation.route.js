import express from 'express';
import {createReservation, getAllReservations, getReservationsByEventType, updateReservation, deleteReservation, updateReservationStatus, getReservationsByUserEmail} from '../controllers/venuereservation.controller.js';

const router = express.Router();

router.post('/', createReservation);
router.get('/', getAllReservations);   
router.get('/user/:email', getReservationsByUserEmail); 
router.get('/:venueId', getReservationsByEventType);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);
router.put('/:id/status', updateReservationStatus);

export default router;

