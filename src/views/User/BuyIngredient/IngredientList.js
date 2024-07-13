import React from 'react';
import { Box, Container, Grid, Typography, List, ListItem, ListItemText, Card, CardMedia, CardContent, IconButton, Badge } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

import ingreImage from '../../../assets/Img/ingre5.jpg';
import ingreImage2 from '../../../assets/Img/ingre5.jpg';
import ingreImage3 from '../../../assets/Img/ingre5.jpg';

const IngredientList = () => {
    const navigate = useNavigate();

    // Sample data
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
    const ingredients = [
        { id: 1, name: 'Ingredient 1', image: ingreImage, price: '$10', description: 'Description 1' },
        { id: 2, name: 'Ingredient 2', image: ingreImage2, price: '$20', description: 'Description 2' },
        { id: 3, name: 'Ingredient 3', image: ingreImage3, price: '$30', description: 'Description 3' },
        { id: 4, name: 'Ingredient 4', image: ingreImage, price: '$40', description: 'Description 4' },
        { id: 5, name: 'Ingredient 5', image: ingreImage2, price: '$50', description: 'Description 5' },
        { id: 6, name: 'Ingredient 6', image: ingreImage3, price: '$60', description: 'Description 6' },
        { id: 7, name: 'Ingredient 7', image: 'https://via.placeholder.com/150', price: '$70', description: 'Description 7' },
        { id: 8, name: 'Ingredient 8', image: 'https://via.placeholder.com/150', price: '$80', description: 'Description 8' },
        { id: 9, name: 'Ingredient 9', image: 'https://via.placeholder.com/150', price: '$90', description: 'Description 9' },
    ];

    const handleCartClick = () => {
        navigate('/user/cart');
    };

    const handleIngredientClick = (id) => {
        navigate(`/user/ingredient-details/${id}`);
    };

    return (
        <Box>
            {/* Banner Image */}
            <Box>
                <img src="https://www.wayne-local.com/media/site/department/menus%20banner.png" alt="Banner" width="100%" />
            </Box>

            <Container maxWidth="80%">
                <Grid container spacing={4} mt={4}>
                    {/* Category List */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Box sx={{ position: 'sticky', top: 0, height: '100vh', overflowY: 'auto', p: 2 }}>
                            <Box border={1} borderRadius={2} p={2} borderColor="grey.300" height="100%">
                                <Typography variant="h6" gutterBottom>
                                    Categories
                                </Typography>
                                <List>
                                    {categories.map((category, index) => (
                                        <ListItem button key={index}>
                                            <ListItemText primary={category} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Ingredient List */}
                    <Grid item xs={12} sm={8} md={9}>
                        <Box display="flex" alignItems="center" flex={1} justifyContent="flex-end">
                            <Badge badgeContent={4} color="error" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                                <IconButton color="primary" aria-label="cart" sx={{ color: '#00AD7C' }} onClick={handleCartClick}>
                                    <ShoppingCartIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                            </Badge>
                        </Box>
                        <Grid container spacing={4}>
                            {ingredients.map((ingredient, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={ingredient.image}
                                            alt={ingredient.name}
                                            sx={{ objectFit: 'cover', cursor: 'pointer' }}
                                            onClick={() => handleIngredientClick(ingredient.id)}
                                        />
                                        <CardContent>
                                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                                <Typography variant="h6" component="div">
                                                    {ingredient.name}
                                                </Typography>
                                                <Box sx={{ backgroundColor: '#00AD7C', padding: '2px 8px', borderRadius: '4px' }}>
                                                    <Typography variant="body2" color="white">
                                                        {ingredient.price}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Typography variant="body2" color="text.secondary" paragraph>
                                                {ingredient.description}
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <IconButton color="primary" aria-label="view details" sx={{ color: '#00AD7C' }} onClick={() => handleIngredientClick(ingredient.id)}>
                                                    <VisibilityIcon sx={{ fontSize: 30 }} />
                                                </IconButton>
                                                <IconButton color="primary" aria-label="add to shopping cart" sx={{ color: '#00AD7C' }}>
                                                    <AddShoppingCartIcon sx={{ fontSize: 30 }} />
                                                </IconButton>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default IngredientList;
