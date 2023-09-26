# Dar formato a un string

nombre = 'Juan'
edad = 20
mensaje_con_formato = 'Mi nombre es %s y tengo %d años' % (nombre, edad)
# %s el parámetro sera de tipo String.
# %d el parámetro apunta a un número decimal.

# Creamos una tupla

persona = ('Mariela', 'Guerrero', 5000.00)
# mensaje_con_formato = 'Hola %s %s tu sueldo es %.2f'  # % persona --> Aquí le pasamos el objeto que es tupla
# print(mensaje_con_formato % persona)
# %.2f el parámetro apunta a un número flotante

nombre = 'Nicolas'
edad = 28
sueldo = 3000
# Placeholder /Marcador de posición
# {:(estos dos puntos dan formato al número).2(número de decimales)f(flotante)}

# mensaje_con_formato = 'Nombre {} Edad {} Sueldo {:.2f}'.format(nombre, edad, sueldo)
# print(mensaje_con_formato)

# mensaje = 'Nombre {0} Edad {1} Sueldo {2:.2f}'.format(nombre, edad, sueldo)
# print(mensaje)
# {0 (indices de posición)}

# mensaje = 'Sueldo {2:.2f} Edad {1} Nombre {0}'.format(nombre, edad, sueldo)
# print(mensaje)

# renombramos variables Nombre {n}
# mensaje = 'Nombre {n} Edad {e} Sueldo {s}'.format(n=nombre, e=edad, s=sueldo)
# print(mensaje)

diccionario = {'nombre': 'Ivan', 'Edad': 35, 'Sueldo': 8000.00}
mensaje = 'Nombre {dic[nombre]} Edad {dic[Edad]} Sueldo {dic[Sueldo]:.2f}'.format(dic=diccionario)
print(mensaje)
