const StatsSection = () => {
  return (
    <section className="py-16 bg-secondary text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-heading font-bold">25+</div>
            <p className="mt-2">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl font-heading font-bold">500+</div>
            <p className="mt-2">Students Trained</p>
          </div>
          <div>
            <div className="text-4xl font-heading font-bold">15+</div>
            <p className="mt-2">Expert Instructors</p>
          </div>
          <div>
            <div className="text-4xl font-heading font-bold">98%</div>
            <p className="mt-2">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
