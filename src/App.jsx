import "./App.css";
import Profile from "./views/Admin/Profile";
import { Grid } from "@mui/material";
import SidebarAdmin from "./components/SidebarAdmin";
import Dashboard from "./views/Admin/DashBoard";
import SellerInfoOfBuyer from "./views/Seller/SellerInfoOfBuyer";
import SellerListOfIngredientPage from "./views/Seller/SellerListOfIngredientPage";
import SellerListOfPost from "./views/Seller/SellerListOfPost";
import ResetPassword from "./views/FirstStep/ResetPassword";
import SignIn from "./views/FirstStep/SignIn";
import SignUp from "./views/FirstStep/SignUp";
import UserHomePage from "./views/User/Home";
import DashboardAdmin from "./views/Admin/DashBoard";
import DashboardSeller from "./views/Seller/DashBoard";
import AdminProfile from "./views/Admin/Profile";
import AdminListUsersPage from "./views/Admin/AdminListUsers/AdminListUsersPage";
import SellerMenuPage from "./views/Seller/SellerMenu/SellerMenuPage";
import SellerDiscountCodePage from "./views/Seller/SellerDiscountCode/SellerDiscountCodePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestBMIPage from "./views/User/TestBMIPage";
import BlogAboutLife from "./views/User/BlogAboutLife";
import RecipePage from "./views/User/RecipePage";
import BlogDetailPage from "./views/User/BlogDetailPage";
import BlogDetail from "./components/User/BlogComponet/blogDetails";
import RecipeDetailsPage from "./views/User/RecipeDetailsPage";
import Header from "./components/User/Header";
import ConfirmMenu from "./views/Admin/AdminMenu/ConfirmMenu";
import ConfirmMenuDetail from "./views/Admin/AdminMenu/ConfirmMenuDetail";
import IngredientList from "./views/User/BuyIngredient/IngredientList";
import IngredientDetail from "./views/User/BuyIngredient/IngredientDetails";
import Cart from "./views/User/BuyIngredient/Cart";
import ConfirmOrder from "./views/User/BuyIngredient/ConfirmOrder";
import MyPost from "./views/User/Profile/MyPost";
import MyProfile from "./views/User/Profile/MyProfile";
import EditProfile from "./views/User/Profile/EditProfile";
import ResetMyPassword from "./views/User/Profile/ResetMyPassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                <Route path="/" element={<UserHomePage />} />

                <Route path="/admin" element={<DashboardAdmin />} />
                <Route path="/admin/profile" element={<AdminProfile />} />
                <Route path="/admin/user" element={<AdminListUsersPage />} />
                <Route path="/admin/list-of-menu" element={<ConfirmMenu />} />
                <Route path="/admin/list-of-menu/1" element={<ConfirmMenuDetail />} />

                <Route path="/user" element={<UserHomePage />} />
                <Route path="/user/list-of-ingredients" element={<IngredientList />} />
                <Route path="/user/ingredient-details/2" element={<IngredientDetail />} />
                <Route path="/user/cart" element={<Cart />} />
                <Route path="/user/confirm-order" element={<ConfirmOrder />} />

                <Route path="/user/my-profile" element={<MyProfile />} />
                <Route path="/user/edit-profile" element={<EditProfile />} />
                <Route path="/user/reset-password" element={<ResetMyPassword />} />

                {/* Không dùng */}
                <Route path="/user/testBMI" element={<TestBMIPage />} />
                <Route path="user/blog" element={<BlogAboutLife />} />
                <Route path="blog/:id" element={<BlogDetailPage />} />
                <Route path="user/recipe" element={<RecipePage />} />
                <Route path="recipe/:id" element={<RecipeDetailsPage />} />
                <Route path="/seller" element={<DashboardSeller />} />
                <Route path="/seller/list-of-buyer" element={<SellerInfoOfBuyer />} />
                <Route path="/seller/list-of-post" element={<SellerListOfPost />} />
                <Route path="/seller/list-of-ingredients" element={<SellerListOfIngredientPage />} />
                <Route path="/seller/menus" element={<SellerMenuPage />} />
                <Route path="/seller/discount_code" element={<SellerDiscountCodePage />} />
                <Route path="/user/my-post" element={<MyPost />} />
                {/* Không dùng */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
