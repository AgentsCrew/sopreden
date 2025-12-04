import { Link } from '@/i18n/routing';
import Image from 'next/image';

interface ProductCardProps {
    title: string;
    description: string;
    link: string;
    image?: string;
}

export default function ProductCard({ title, description, link, image }: ProductCardProps) {
    return (
        <Link href={link} className="group flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white transition-all hover:border-black">
            {image && (
                <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            )}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
                <p className="mb-4 flex-1 text-sm text-gray-600">{description}</p>
                <div className="mt-auto flex items-center text-sm font-medium underline decoration-1 underline-offset-4 group-hover:decoration-2">
                    View Details
                </div>
            </div>
        </Link>
    );
}
