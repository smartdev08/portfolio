// @flow strict
import Image from 'next/image';

const ProjectCard = ({ project }) => {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 bg-white text-center align-middle w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={`/image/projects/${project.image}`}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-auto mx-auto group-hover:scale-110 transition-all duration-300'
        />
      </div>

      <div className='p-3'>
        <p className='my-2 lg:my-3 cursor-pointer text-lg text-teal-400 sm:text-xl font-medium hover:text-violet-500'>
          {project.title}
        </p>
        <div>
          {project.descriptions.map((description, index) => (
            <p key={index} className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6'>
              {description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;