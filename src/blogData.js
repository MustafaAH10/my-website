// blogData.js

const blogPosts = [
	{
		id: "1",
		title: "Beginner's Guide to Natural Language Processing (NLP)",
		content: [
			{
				type: "text",
				value:
					"NLP is the new 'in' thing and understandably so. Processing human language and semantics is an inherently difficult task but thankfullly, advances in machine learning have made this much easier.",
			},
			{
				type: "text",
				value: `
                Basic Components of NLP
                NLP can be broken down into two main components:
                Natural Language Understanding (NLU): How machines understand human language.
                Natural Language Generation (NLG): How machines generate human-like language.
                `,
			},
			{ type: "code", value: "console.log(hello);" },
			{ type: "text", value: "This is a conclusion to the first post." },
		],
	},
	{
		id: "2",
		title: "Second Post",
		content: [{ type: "text", value: "Content of the second post." }],
	},
];

export default blogPosts;
