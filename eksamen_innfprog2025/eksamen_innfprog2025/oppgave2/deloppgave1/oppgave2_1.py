#1
prw = [
    "kompilator",
    "variabel",
    "funksjon",
    "rekursjon",
    "syntaks",
    "bibliotek",
    "algoritme",
    "iterasjon",
    "datastruktur",
    "kommentar"
]

#2
def lungo(ordliste):
    if not ordliste:
        return None
    return max(ordliste, key=len)

#3
def add(nytt_ord):
    prw.append(nytt_ord.strip())

#4
add("objektorientert")

#5
resultat = lungo(prw)
print("Lengst:", resultat)
