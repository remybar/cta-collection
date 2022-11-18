import { CircleStackIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Logo = () => (
    <Link href="/" className="flex items-center space-x-1">
        <CircleStackIcon className="w-8 h-8 flex-shrink-0"/>
        <span className="font-bold text-lg tracking-tight whitespace-nowrap">CTA Collection</span>
    </Link>
);

export default Logo;
