using System;

// Ad-hoc polymorphism: function overloading

static class DateFormatter
{
  public static string FormatDate(DateTime value, string locales = "en-US")
  {
    return value.ToString("yyyy-MM-dd");
  }

  public static string FormatDate(long timestamp, string locales = "en-US")
  {
    var date = new DateTime(1970, 1, 1).AddSeconds(timestamp);
    return date.ToString("yyyy-MM-dd");
  }

  public static string FormatDate(string value, string locales = "en-US")
  {
    var date = DateTime.Parse(value);
    return date.ToString("yyyy-MM-dd");
  }
}

class Program
{
  static void Main()
  {
    Console.WriteLine(
      "formatDate(DateTime): {0}",
      DateFormatter.FormatDate(new DateTime(2025, 10, 31))
    );
    Console.WriteLine(
      "formatDate(timestamp): {0}",
      DateFormatter.FormatDate(
        DateTimeOffset.Now.ToUnixTimeSeconds()
      )
    );
    Console.WriteLine(
      "formatDate(string): {0}",
      DateFormatter.FormatDate("2025-10-31T12:30:00Z")
    );
  }
}
