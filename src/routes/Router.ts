import { Router } from "express";
import {productRouter,orderRouter,productCartRouter,userRouter} from './' // nos traemos loas routas de cada indentidad


const router = Router();

// hacemos las rutas de como se va a acceder a las difentes tablas

router.use('/products', productRouter)
router.use('/orders', orderRouter)
router.use('/productcart', productCartRouter)
router.use('/users', userRouter)



export default router; // esxportamos por default router