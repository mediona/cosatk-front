/* eslint-disable no-mixed-spaces-and-tabs */
import { Container, Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import MenuCatalogue from '../../../components/MenuCatalogue/MenuCatalogue'
import {getArticleImage,} from '../../../services/homeService'
import {  useParams } from 'react-router-dom'

import { IArticle } from '../../../interfaces/article.interface'
import articleService from '../../../services/articleService'

const Detall = () => {
	const [article, setArticle] = useState<IArticle>()

	const [image, setImage] = useState<any>(null)
	
	const params = useParams()
	console.log(params)

	useEffect(() => {
		async function getImg() {
			if (params.id) {
				const response = await getArticleImage(params.id)
				console.log(response)
				setImage(response)
			}
		}

		getImg()
	}, [])

	//Bring article
	useEffect(() => {
		const loadDetall = async () => {
			if (params.id) {
				const response = await articleService.getArticleById(params.id)
				setArticle(response)
			}
		}
		loadDetall()
	}, [])

	return (
		<>
			<Header />
			<MenuCatalogue />
			<Container>
				<>
					<Box
						display={{ xs: 'block', sm: 'flex' }}
						overflow-y={{ xs: 'hidden' }}
						sx={{
							overflow: { xs: 'scroll', sm: 'scroll' },
						}}
					>
						<section>
							<Container
								sx={{
									padding: { xs: '25px', sm: '50px' },
									width: '100vw',
									height: '100vh',
								}}
							>
								<Typography variant="h1">Detall Article</Typography>
								<Box
									sx={{
										marginTop: '20px',
										display: 'flex',
										flexDirection: { xs: 'column', sm: 'row' },
										alignItems: 'center',
										justifyContent: 'space-between',
										gap: '50px',
										bgcolor: '#67B7E1',
										padding: '20px 50px',
										width: '80%',
									}}
								>
									<Box>
										<img src={image && image.src} alt="image bike" />
									</Box>
									<Box>
										<h1>{article?.name}</h1>
										<p>
											<span>Nom: </span>
											{article?.name && article?.name}
										</p>
										<p>
											<span>Categoria: </span>
											{article?.short_description && article?.short_description}
										</p>
										<p>
											<span>Afegit el: </span>
										</p>
										<p>
											<span>Codi: </span>
											{article?.components}
										</p>
										<p>
											<span>Número de serie: </span>0001
										</p>
										<p>
											<span>Condicio: </span>Bona
										</p>
										<p>
											<span>Preu pagat: </span>Bianchi
										</p>
										<p>
											<span>Marca: </span>200€
										</p>
										<p>
											<span>Valor: </span>100€
										</p>
										<p>
											<span>Preu de lloguer: </span>5€
										</p>
										<p>
											<span>Període de lloguer: </span>7 dies
										</p>
										<p>
											<span>Components: </span>Comproveu la pressió dels
											pneumátics
										</p>
										<p>
											<span>Informació de cures: </span>Will Smith
										</p>
										<p>
											<span>Propietar de: </span>Chris Rock
										</p>
										<p>
											<span>Donat per: </span>Jada Pinkett Smith
										</p>
										<p>
											<span>Descripció llarga: </span>mitjá de transport que té
											dures rodes, amb pedals que permeten transmetre el
											moviment a la roda del darrere a través d´una cadena, un
											pinyó i un plat
										</p>
										<p>
											<span>Descripció curta: </span>bicicleta infantil fins a 3
											anys
										</p>
									</Box>
								</Box>
							</Container>
						</section>
					</Box>
				</>
			</Container>
			<Footer />
		</>
	)
}

export default Detall
