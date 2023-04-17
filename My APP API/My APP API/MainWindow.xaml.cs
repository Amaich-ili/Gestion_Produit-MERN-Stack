using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Windows;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net;
using System.IO;
using Newtonsoft.Json;
using System.Net.Http.Formatting;

namespace My_APP_API
{
	/// <summary>
	/// Logique d'interaction pour MainWindow.xaml
	/// </summary>
	public partial class MainWindow : Window
	{
		public MainWindow()
		{
			InitializeComponent();
			GetData();
		}

		private void GetData()
		{

			HttpClient client = new HttpClient();
			client.BaseAddress = new Uri("http://localhost:4000/");
			client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

			HttpResponseMessage response = client.GetAsync("api/products").Result;

			if (response.IsSuccessStatusCode)
			{
				var api = response.Content.ReadAsAsync<IEnumerable<MyApi>>().Result;
				product.ItemsSource = api;
			}
			else
			{
				MessageBox.Show("Error Code" + response.StatusCode + " : Message - " + response.ReasonPhrase);
			}

		}

	}
}
