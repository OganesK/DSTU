class Hash:
    def __init__(self, size):
        self.__n = size
        self.dict = dict()
        self.data = [[] for i in range(size)]

    def add(self, word):
        key = self.hashfunc(word)
        self.dict[key] = word

    def hashfunc(self, word):
        n = len(word)
        sum_ = ord(word[0])
        for i in range(1, n):
            sum_ **= ord(word[i])
            return sum_ % 100

    def find(self, word):
        key = self.hashfunc(word)
        return self.dict[key], key


a = Hash(10)
a.add("abb")
a.add("abb")
a.add("aac")
a.add("caa")
a.add("aba")
a.add("aaab")

print(a.find("abb"))
print(a.find("aac"))
print(a.find("caa"))
print(a.find("aba"))
print(a.find("aaab"))
print(a.dict)
print(a.data)
