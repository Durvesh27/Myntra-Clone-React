import express from 'express';

import allRoutes from './AllRoutes.js';
import buyerRoutes from './BuyerRoutes.js';
import sellerRoutes from './SellerRoutes.js';
import adminRoutes from './AdminRoutes.js';

const router = express.Router();

router.use('/user', allRoutes)
router.use('/buyer', buyerRoutes)
router.use('/seller', sellerRoutes)
router.use('/admin', adminRoutes)

export default router;