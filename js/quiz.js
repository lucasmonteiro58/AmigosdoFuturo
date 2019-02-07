


temas = ['mei', 'laz', 'ino', 'edu', 'eco', 'sau', 'gov']
pont_matrix  = [[3,2,-1,-2,-3,1,0],
				[1,3,-2,-1,2,0,-3],
				[-3,1,3,2,0,-1,-2],
				[-2,0,1,3,-1,-3,2],
				[-1,-3,2,0,3,-2,1],
				[2,-2,0,-3,1,3,-1],
				[0,-1,-3,1,-2,2,3]]
pont_final = [0,0,0,0,0,0,0]


questions = ['Você ficaria um mês numa floresta com seus amigos?',
			 'Aceitar sair amanhã de manhã para uma viagem por todo o Ceará?',
			 'Aceitaria trocar seus olhos por outros com visão de raio x?',
			 'Aceitaria ser professor/professora da sua turma?',
			 'Trocaria seus brinquedos por dinheiro?',
			 'Gostaria de colher sua comida no quintal da sua casa?',
			 'Você gostaria de ser o prefeito da sua cidade?']

yes_indexes = []

for index, question in enumerate(questions):
	resp = raw_input(question)
	if resp == 'sim':
		pont_final = [sum(x) for x in zip(pont_final, pont_matrix[index])]
		yes_indexes.append(index)
print pont_final


for value in pont_final:
	if value.index(index):
	




#indexMax = pont_final.index(max(pont_final))


