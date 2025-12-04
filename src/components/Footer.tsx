export default function Footer() {
    return (
        <footer className="w-full border-t border-black/10 bg-white py-8">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Sopreden Trading. All rights reserved.
            </div>
        </footer>
    );
}
