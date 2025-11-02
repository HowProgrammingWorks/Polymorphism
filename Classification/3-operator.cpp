// Ad-hoc polymorphism: operator overloading

#include <cmath>
#include <iostream>

struct Coord {
  double x;
  double y;
};

Coord operator+(const Coord& a, const Coord& b) {
  return Coord{a.x + b.x, a.y + b.y};
}

Coord operator-(const Coord& a, const Coord& b) {
  return Coord{a.x - b.x, a.y - b.y};
}

std::ostream& operator<<(std::ostream& os, const Coord& v) {
  return os << v.x << ":" << v.y;
}

int main() {
  const Coord point{3.0, 4.0};
  const Coord offset{1.0, 2.0};
  const Coord sum = point + offset;
  const Coord diff = point - offset;
  std::cout << "Point: " << point << '\n';
  std::cout << "Offset: " << offset << '\n';
  std::cout << "Sum: " << sum << '\n';
  std::cout << "Diff: " << diff << '\n';
}
