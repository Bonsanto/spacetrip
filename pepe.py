import itertools


def averageDistance(*p):
    def computeDistance(p1, p2):
        return (((p1[0] - p2[0]) ** 2) + ((p1[1] - p2[1]) ** 2)) ** 0.5

    pairs = itertools.combinations(p, 2)
    distances = [computeDistance(pair[0], pair[1]) for pair in pairs]

    return sum(distances) / len(distances)


def palindromeTester(w1):
    w2 = w1[::-1]

    if (w1 == w2):
        return True
    else:
        counter = 0
        for i in range(len(w1)):
            if w1[i] != w2[i]:
                counter += 1
            elif counter == 2:
                return False
            else:
                return True


def NumMasPopular(l, n):
    numbers = {}

    for number in l:
        if number not in numbers:
            numbers[number] = 1
        else:
            numbers[number] += 1

    keys = tuple(numbers)
    maximum = keys[0]

    for k in keys[1:]:
        if numbers[k] > numbers[maximum]:
            maximum = k

        elif numbers[k] == numbers[maximum]:
            p = min(k, maximum)
            maximum = p
            maximum = p

    return maximum


print(NumMasPopular([34, 31, 34, 77, 82], 5))
print(NumMasPopular([22, 101, 102, 101, 102, 525, 88], 7))
print(NumMasPopular([66], 1))
print(NumMasPopular([14, 14, 2342, 2342, 2342], 5))
