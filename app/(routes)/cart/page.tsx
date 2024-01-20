// Components
import Container from "@/components/container";

const CartPage = () => {
    return (
        <Container>
            <div className="flex flex-col items-center p-24 space-y-8">
                <h1 className="text-6xl font-bold text-center">Your cart is currently empty</h1>
            </div>
        </Container>
    );
};

export default CartPage;
