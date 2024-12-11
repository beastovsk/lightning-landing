import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="w-full pt-20 pb-10" id="contact">
			{/* background grid */}
			<div className="w-full absolute left-0 -bottom-72 min-h-96">
				<img
					src="/footer-grid.svg"
					alt="grid"
					className="w-full h-full opacity-50 "
				/>
			</div>

			<div className="flex flex-col items-center">
				<h1 className="text-center text-2xl font-bold lg:max-w-[45vw]">
					Подключаем{" "}
					<span className="text-purple">админ-панель</span>
				</h1>
				<img src='https://i.imgur.com/ZGVER1L.jpeg' className='rounded-2xl scale-75' alt='demo'/>
				<h1 className="heading lg:max-w-[45vw]">
					Остались вопросы?{" "}
					<span className="text-purple">Записывайтесь</span> на демо продукта
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Полностью объясним дальнейшие шаги и договоримся о спец. предложении
				</p>
				<a href="https://forms.yandex.ru/u/6759e28e068ff08dfb5b7b85/">
					<MagicButton
						title="Перейти на запись"
						icon={<FaLocationArrow/>}
						position="right"
					/>
				</a>
			</div>
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright © 2024 Lightning
				</p>

				<div className="flex items-center md:gap-3 gap-6">
					{/*{socialMedia.map((info) => (*/}
					{/*	<div*/}
					{/*		key={info.id}*/}
					{/*		className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"*/}
					{/*	>*/}
					{/*		<Link href={info.href} target="_blank">*/}
					{/*			<img*/}
					{/*				src={info.img}*/}
					{/*				alt="icons"*/}
					{/*				width={20}*/}
					{/*				height={20}*/}
					{/*			/>*/}
					{/*		</Link>*/}
					{/*	</div>*/}
					{/*))}*/}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
