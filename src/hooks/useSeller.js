import { useEffect, useState } from 'react';

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setisSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://outdoor-furniture-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setisSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
};

export default useSeller;