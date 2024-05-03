import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Categories from './pages/Categories.tsx'
import Category, {
	loader as productsByCategoryIdLoader,
} from './pages/Category.tsx'
import Main from './pages/Main.tsx'
import Products from './pages/Products.tsx'
import './styles/index.css'

const queryClient = new QueryClient()
const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/categories',
		element: <Categories />,
	},
	{
		path: '/products',
		element: <Products />,
	},
	{
		path: '/categories/:categoryId',
		loader: productsByCategoryIdLoader(queryClient),
		element: <Category />,
	},
	{
		path: '/product/:productId',
		element: <div>Product</div>,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
	</QueryClientProvider>
)
