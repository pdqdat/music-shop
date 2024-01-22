const QuoteSection = () => {
    return (
        <div className="relative h-80">
            <img
                src="/panel-image.jpg"
                alt="Banner image"
                className="absolute left-0 top-0 h-full w-full object-cover"
            />

            <div className="absolute top-0 z-20 flex h-full w-full items-center justify-center p-8 text-white">
                <blockquote className="space-y-2 text-center">
                    <p className="text-2xl font-bold lg:text-4xl">
                        &ldquo;One good thing about music, when it hits you, you
                        fell no pain.&rdquo;
                    </p>

                    <footer className="text-base font-medium lg:text-lg">
                        Bob Marley
                    </footer>
                </blockquote>
            </div>
        </div>
    );
};

export default QuoteSection;
