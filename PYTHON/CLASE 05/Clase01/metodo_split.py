
# help(str.split)

cursos = 'Java JavaScript Nodejs Python Diseno'
lista_curso = cursos.split()
print(f'Lista de cursos: {lista_curso}')

cursos_separados_coma = 'Java,Python,Nodejs,JavaScript,Spring'
lista_curso = cursos_separados_coma.split(',')
print(f'Lista de cursos: {lista_curso}')
print(len(lista_curso))