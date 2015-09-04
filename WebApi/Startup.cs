using Microsoft.Owin;
using Owin;
using RazorEngine;
using RazorEngine.Templating;
using System.Collections.Generic;
using System.IO;
using System.Web.Hosting;
using WebApi.Models;

[assembly: OwinStartup(typeof(WebApi.Startup))]

namespace WebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var path = HostingEnvironment.MapPath("~/Views/contratos.cshtml");
            string template = File.ReadAllText(path);
            Engine.Razor.Compile(template, "contratos", modelType: typeof(List<ContratoViewModel>));
            ConfigureAuth(app);
        }
    }
}