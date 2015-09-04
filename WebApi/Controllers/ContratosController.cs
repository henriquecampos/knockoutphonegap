using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("Contratos")]
    public class ContratosController : ApiController
    {
        // Get /Contratos
        [Route("")]
        [HttpGet]
        public IList<ContratoViewModel> ObterContratos()
        {
            return new List<ContratoViewModel>
            {
                new ContratoViewModel { Id = 1, Tipo = "CLT", Data = DateTime.Now.AddYears(-2) },
                new ContratoViewModel { Id = 2, Tipo = "PJ", Data = DateTime.Now.AddYears(-3) }
            };
        }

        [Route("html")]
        [HttpGet]
        [AllowAnonymous]
        public IHttpActionResult Html()
        {
            var contratos = new List<ContratoViewModel>
            {
                new ContratoViewModel { Id = 1, Tipo = "CLT", Data = DateTime.Now.AddYears(-2) },
                new ContratoViewModel { Id = 2, Tipo = "PJ", Data = DateTime.Now.AddYears(-3) }
            };

            return HtmlActionResult.Build("contratos", contratos);
        }
    }
}