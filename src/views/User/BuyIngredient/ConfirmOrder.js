import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, TextField, Select, MenuItem, Paper, FormControl, InputLabel } from '@mui/material';

const ConfirmOrder = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [note, setNote] = useState('');
    const [shippingMethod, setShippingMethod] = useState('');
    const [discount, setDiscount] = useState(0);
    const [shippingFee, setShippingFee] = useState(5);
    const estimatedDeliveryDate = new Date();
    estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 3);

    const purchasedProducts = [
        { name: 'Product 1', quantity: 2, price: 30 },
        { name: 'Product 2', quantity: 1, price: 50 },
    ];

    const totalProductPrice = purchasedProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    const totalPrice = totalProductPrice - discount + shippingFee;

    return (
        <Box>
            {/* Banner */}
            <Box>
                <img src="https://www.wayne-local.com/media/site/department/menus%20banner.png" alt="Banner" width="100%" />
            </Box>
            <br />
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Left Side - 2/3 */}
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h5" gutterBottom>
                                Confirm Order
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        variant="outlined"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Phone"
                                        variant="outlined"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        variant="outlined"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Payment Method</InputLabel>
                                        <Select
                                            value={paymentMethod}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            label="Payment Method"
                                        >
                                            <MenuItem value="credit">Credit Card</MenuItem>
                                            <MenuItem value="paypal">PayPal</MenuItem>
                                            <MenuItem value="cod">Cash on Delivery</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper elevation={1} sx={{ p: 2 }}>
                                        <Typography variant="h6">Purchased Products</Typography>
                                        {purchasedProducts.map((product, index) => (
                                            <Box key={index} display="flex" justifyContent="space-between" my={1}>
                                                <Typography variant="body1">{product.name}</Typography>
                                                <Typography variant="body1">{product.quantity} x ${product.price}</Typography>
                                            </Box>
                                        ))}
                                        <Box display="flex" justifyContent="space-between" mt={2}>
                                            <Typography variant="body2">Shipping Fee</Typography>
                                            <Typography variant="body2">${shippingFee}</Typography>
                                        </Box>
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography variant="body2">Discount</Typography>
                                            <Typography variant="body2">-${discount}</Typography>
                                        </Box>
                                        <Box display="flex" justifyContent="space-between" mt={2}>
                                            <Typography variant="h6">Total</Typography>
                                            <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    {/* Right Side - 1/3 */}
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <TextField
                                fullWidth
                                label="Order Note"
                                variant="outlined"
                                multiline
                                rows={4}
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                                <InputLabel>Shipping Method</InputLabel>
                                <Select
                                    value={shippingMethod}
                                    onChange={(e) => setShippingMethod(e.target.value)}
                                    label="Shipping Method"
                                >
                                    <MenuItem value="standard">Standard</MenuItem>
                                    <MenuItem value="express">Express</MenuItem>
                                </Select>
                            </FormControl>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Estimated Delivery Date: {estimatedDeliveryDate.toDateString()}
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Total: ${totalPrice.toFixed(2)}
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ bgcolor: '#00AD7C', mt: 'auto' }}>
                                Order
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ConfirmOrder;
