import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
    title: string;
    description: string;
    link: string;
    image?: string;
}

export default function ProductCard({ title, description, link, image }: ProductCardProps) {
    return (
        <Link href={link} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-xs transition-all hover:shadow-xl hover:border-teal-500/40">
            {image && (
                <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}
            <div className="flex flex-1 flex-col p-6 justify-between space-y-3">
                <div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 group-hover:text-[#004d51] transition-colors">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{description}</p>
                </div>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#004d51] group-hover:text-[#00383b]">
                    <span>View Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}
