using RazorEngine;
using RazorEngine.Templating;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;

namespace WebApi.Models
{
    public static class HtmlActionResult
    {
        public static HtmlActionResult<T> Build<T>(string viewName, T model)
        {
            return new HtmlActionResult<T>(viewName, model);
        }
    }

    public class HtmlActionResult<T> : IHttpActionResult
    {
        public const string ViewDirectory = @"E:devConsoleApplication8ConsoleApplication8";

        private readonly string _viewName;
        private readonly T _model;

        public HtmlActionResult(string viewName, T model)
        {
            _viewName = viewName;
            _model = model;
        }

        public Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
        {
            var modelType = typeof(T);
            string result = Engine.Razor.Run(_viewName, model: _model, modelType: modelType);

            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(result);
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/html");
            return Task.FromResult(response);
        }
    }
}