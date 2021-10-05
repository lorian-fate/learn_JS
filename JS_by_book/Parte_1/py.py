



def ordenarNombres():
    numero_de_nombres = int(input("Introduce la cantidad de nombres: "))
    lista_de_nombres = []
    while numero_de_nombres != 0:
        nombre = input("Introduce tu nombre: ")
        lista_de_nombres.append(nombre)
        numero_de_nombres = numero_de_nombres - 1
    return sorted(lista_de_nombres)

print(ordenarNombres())

