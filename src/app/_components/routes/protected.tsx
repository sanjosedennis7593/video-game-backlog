import { useRouter } from 'next/navigation';

import { useAuthContext } from '@/app/_context/auth_context';


const WithAuth = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const router = useRouter()

    const { user } = useAuthContext();

    if (typeof window !== 'undefined' && user === null)  router.replace('/')

    if (!user) return <div /> 

    return children
};

export default WithAuth;