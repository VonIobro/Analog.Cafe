// styles
import styled, { css } from "styled-components"
import Color from "color"
import { Quote } from "./quote"


// css
const sectionHeading = css`
	${ props => props.theme.typography.title.auto }
	font-size: ${ props => props.theme.size.font.make.larger / 1.5 }em;
	padding-top: 1em;
`
const paragraph = css`
	margin: ${ props => props.theme.size.block.spacing }em 0;
`
const sectionBreak = css`
	text-align: 	center;
	padding:			${ props => props.theme.size.block.column.safety }em 0 ${ props => props.theme.size.block.spacing * 2 }em;
	color:				${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.half).string() };
	border:				0;
	margin:				0;
	&:before {
		content: 			"✽ ✽ ✽";
		line-height: 	1em;
		display: 			block;
	}
	&.focus {
		background-color: ${ props => props.theme.color.highlight };
	}
`

export const PageSection = styled.section`
	${ props => props.theme.size.font.auto }
	${ props => props.theme.typography.text.auto }
	
	margin: 		0 auto;
	max-width: 	${ props => props.theme.size.block.column.maxwidth.m }px;
	${ props => props.theme.size.breakpoint.min.xxl`max-width: ${ props => props.theme.size.block.column.maxwidth.l }px;` };
	padding: 		0 ${ props => props.theme.size.block.column.safety }em;
	
	&::after {
		content: 		"";
		clear: 			both;
		display: 		block;
	}
	
	p		{ ${ paragraph } }
	ul 	{
		margin: 		0 ${ props => props.theme.size.block.column.safety }em 0;
		${ props => props.theme.size.breakpoint.max.xs`
			margin:		0 !important;
		` }
		li 	{
			line-height:		${ props => props.theme.size.block.column.safety }em;
			padding-bottom:	${ props => props.theme.size.block.spacing }em;
		}
	}
	
	blockquote 	{ ${ Quote } }
	h2, h3, h4 	{ ${ sectionHeading } }
	hr 					{ ${ sectionBreak } }
`
export const PageArticle = styled.article``